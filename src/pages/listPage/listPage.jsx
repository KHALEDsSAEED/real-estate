import { listData } from "../../lib/testData.js"
import "./listPage.scss";
import Filter from "../../components/filter/Filter.jsx";
import Card from "../../components/card/Card.jsx";
import Map from "../../components/map/Map.jsx";

function listPage() {

    const data = listData;

    return (

        <div className="list-page">
            <div className="list-container">
                <div className="wrapper">
                    <Filter />
                    {data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="map-container">
                <Map items={data} />
            </div>
        </div>
    )

}

export default listPage