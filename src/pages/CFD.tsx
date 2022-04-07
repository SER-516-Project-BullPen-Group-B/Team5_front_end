import Nav from '../components/NavBar';
import DropDown from '../components/DropDown';
function CFD() {
    return (
        <div>
            <Nav />
            <div className="flex justify-end ...">
                <div className="m-6">
                {" "}
                <DropDown />
                </div>
            </div>
            <div className="m-4">
                Cummulative Flow Diagram
            </div>
        </div>
    );
}

export default CFD;