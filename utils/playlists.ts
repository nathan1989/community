import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PlaylistItem } from "interfaces";
const yaml = require('js-yaml')

const playlistsDirectory = path.join(process.cwd(), "content/playlists");

let playlistCache: PlaylistItem[];

function fetchPlaylist(): PlaylistItem[] {
  if (playlistCache) {
    return playlistCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(playlistsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".md"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(playlistsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        title: string;
        slug: string;
      };
      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  return allPostsData;
}

export function countPlaylists(): number {
  return fetchPlaylist().length;
}

export function listPlaylist(): PlaylistItem[] {
  return fetchPlaylist()
}