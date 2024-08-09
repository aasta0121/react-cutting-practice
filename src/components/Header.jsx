const Header = () => {
    return (
        <div className="header container">
            <section className="header__left">
                <p>我們使用這個網頁來當範例</p>
                <p className="header__title">學習用網頁</p>
                <a className="block-btn block-btn--gradient" href="#">閃光按鈕</a>
            </section>
            <section className="header__right">
                <img className="header__img" src="https://picsum.photos/300" />
            </section>
        </div>);
}

export default Header;