import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header/Header';
import SideBar from './SideBar/SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaulLayout;
