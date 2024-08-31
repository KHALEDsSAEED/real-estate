import { listData } from "../../lib/testData.js"
import "./listPage.scss";
import Filter from "../../components/filter/Filter.jsx";
import Card from "../../components/card/Card.jsx";
import Map from "../../components/map/Map.jsx";

function listPage() {

    const data = listData;

    return <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <Map items={data} />
        </div>
    </div>;

}

export default listPage