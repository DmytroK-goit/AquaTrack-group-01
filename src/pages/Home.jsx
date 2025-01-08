import LeftPart from "../components/home/Home/LeftPart";
import RightPart from "../components/home/Home/RightPart";
import UserSettingsModal from "../components/UserSettingsModal/UserSettingsModal.jsx";

const Home = () => {
	return (
		<div className="flex justify-between">
			<LeftPart />
			<RightPart />
			<UserSettingsModal />
		</div>
	);
};

export default Home;
