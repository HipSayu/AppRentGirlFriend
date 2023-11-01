import Header from '~/components/Layout/components/Header/Header';
import SideBar from './SideBar/SideBar';

function DefaulLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="Container">
                <SideBar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
