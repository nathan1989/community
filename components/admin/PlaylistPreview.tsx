import PlaylistSection from "components/PlaylistSection";

const PlaylistPreview = ({ entry }: any) => {
    const data = entry.getIn(["data"]).toJS();
    if (data) {
        return <PlaylistSection item={data} />;
    } else {
        return <div>Loading...</div>;
    }
}

export default PlaylistPreview