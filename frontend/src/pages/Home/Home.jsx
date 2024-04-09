import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-full md:h-full lg:h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
