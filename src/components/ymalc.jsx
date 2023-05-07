import Ymalcitem from "./ymalcitem";
function Ymalc() {
	return (
		<div>
			<div className="flex md:flex-row md:space-x-6 md:space-y-0 space-y-12 max-w-[1000px] mx-auto px-8  flex-col">
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx99-mark-one-headphones.jpg")}
					text="XX99 MARK I"
				/>
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx59-headphones.jpg")}
					text="XX59 MARK I"
				/>
				<Ymalcitem
					image={require("../assets/shared/desktop/image-xx99-mark-two-headphones.jpg")}
					text="XX99 MARK II"
				/>
			</div>
		</div>
	);
}
export default Ymalc;
