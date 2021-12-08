import dynamic from 'next/dynamic';
import PlaylistPreview from 'components/admin/PlaylistPreview';

const AdminWithNoSSR = dynamic(
  () =>
    import("netlify-cms-app").then((CMS: any) => {
      CMS.registerPreviewStyle("/admin/main.css");
      CMS.registerPreviewTemplate("playlists", PlaylistPreview)
      CMS.init();
    }) as any,
  { ssr: false }
);

export default AdminWithNoSSR;
