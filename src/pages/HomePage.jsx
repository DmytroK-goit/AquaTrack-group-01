import AdvantagesSection from "../components/HomePage/HomePageComponents/AdvantagesSection";
import WelcomeSection from "../components/HomePage/HomePageComponents/WelcomeSection";
import UserSettingsModal from "../components/UserSettingsModal/UserSettingsModal.jsx";

const HomePage = () => {
	return (
		<div className="flex justify-between">
			<WelcomeSection />
			<AdvantagesSection />
			<UserSettingsModal />
		</div>
	);
};

export default HomePage;
