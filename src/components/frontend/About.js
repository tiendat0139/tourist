import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from '~/assets/css/componentStyles/frontend/About.module.scss'
const cx = classNames.bind(styles);

const About = function () {
    const [offset, setOffset] = useState(0);
    const [showDesc, setShowDesc] = useState([false, true, false, false]);
    const [openAws, setOpenAws] = useState([false])
    const handleScroll = (e) => {
        setOffset(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
    const handleShowDesc = (e) => {
        const activeId = e.target.getAttribute('ctid');
        var newShowDesc = showDesc;
        for (let i = 1; i <= 3; i++) {
            if (i !== activeId) newShowDesc[i] = false
        }
        newShowDesc[activeId] = true
        setShowDesc([...newShowDesc])
    }
    const handleOpenAws = (e) => {
        const opid = e.target.getAttribute('opid');
        var newOpen = openAws;
        newOpen[opid] = !newOpen[opid];
        setOpenAws([...newOpen])
    }
   
    return (
        <div className={cx('about')}>
            <div className={cx('overlay', 'd-flex justify-content-center', 'align-items-center')}>
                <h1 className={cx('header')} style={{opacity: `${1-offset/400}`}}>About Us</h1>
            </div>
            <section className={cx('about-us')}>
                <div className="container">
                    <div className="row">
                        <div className={cx('col-6', 'image')}></div>
                        <div className={cx('content', 'col-6')}>
                            <div className={cx('navbar', 'row')}>
                                <div className={cx('col-4')} >
                                    <div className={cx('navbar-item', { active: showDesc[1] })} ctid="1" onClick={(e) => handleShowDesc(e)}>
                                        What we do</div>
                                </div>
                                <div className={cx('col-4')}>
                                    <div className={cx('navbar-item', { active: showDesc[2] })} ctid="2" onClick={(e) => handleShowDesc(e)}>
                                        Our mission</div>
                                </div><div className={cx('col-4')} >
                                    <div className={cx('navbar-item', { active: showDesc[3] })} ctid="3" onClick={(e) => handleShowDesc(e)}>
                                        Our goal</div>
                                </div>
                            </div>
                            <div className={cx('desc', { 'active-desc': showDesc[1] })}>
                                <h2 className="mb-4">Offering Reliable Hosting</h2>
                                We always try to cooperate with hotels and tourist attractions to create tours at the most reasonable prices.
                                What's more, we're looking for the best collaborators to help you travel.
                                We always strive to bring you the best experience in Vietnam.

                            </div>
                            <div className={cx('desc', { 'active-desc': showDesc[2] })}>
                                <h2 className="mb-4">Exceptional Web Solutions</h2>
                                We always wanted to create a website that makes it easier for foreigners to travel in Vietnam.
                                Moreover, the company always tries to create a large number of collaborators to guide visitors
                            </div>
                            <div className={cx('desc', { 'active-desc': showDesc[3] })}>
                                <h2 className="mb-4">Help Our Customer</h2>
                                Currently, the company has 50,000 users and 1000 active collaborators at tourist destinations across Vietnam.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cx('sec-question')}>
                <div className="container">
                    <h2><strong>Frequently</strong> Ask Question</h2>
                    <div className={cx('question')}>
                        <div className={cx('row')}>
                            <div className={cx('col-md-6')}>
                                <div className={cx('item')}>
                                    When she reached the first hills?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[1] })}
                                        opid="1" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[1] })}
                                        opid="1" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[1] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                                <div className={cx('item')}>
                                    How long in advance do I need to book a tour?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[2] })}
                                        opid="2" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[2] })}
                                        opid="2" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[2] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                                <div className={cx('item')}>
                                    What do I need to do after booking a tour?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[3] })}
                                        opid="3" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[3] })}
                                        opid="3" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[3] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                            </div>

                            <div className={cx('col-md-6')}>
                                <div className={cx('item')}>
                                Can I choose multiple tours?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[4] })}
                                        opid="4" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[4] })}
                                        opid="4" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[4] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                                <div className={cx('item')}>
                                    Does the company guarantee the quality?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[5] })}
                                        opid="5" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[5] })}
                                        opid="5" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[5] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                                <div className={cx('item')}>
                                    Is there a discount if I book a group tour?
                                    <i className={cx('fa-solid fa-circle-plus', { 'show-icon': !openAws[6] })}
                                        opid="6" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                    <i className={cx('fa-solid fa-circle-minus', { 'show-icon': openAws[6] })}
                                        opid="6" onClick={(e) => handleOpenAws(e)}>
                                    </i>
                                </div>
                                <div className={cx('item-aws', { open: openAws[6] })}>
                                    When she reached the first hills of the Italic Mountains,
                                    she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;