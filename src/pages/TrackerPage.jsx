import WaterDetailedInfo from "../components/TrackerPage/WaterDetails/WaterDetailedInfo";
import WaterMainInfo from "../components/TrackerPage/WaterMain/WaterMainInfo";

const TrackerPage = () => {
	return (
		<div className="flex justify-between">
			<WaterMainInfo />
			<WaterDetailedInfo />
		</div>
	);
};

export default TrackerPage;
