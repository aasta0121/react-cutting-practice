const Event = () => {
    const events = [
        { month: "September", day: 28, week: "friday", title: "The Legendary DJ Supernova", time: "9pm-4am" },
        { month: "September", day: 28, week: "friday", title: "The Legendary DJ Supernova", time: "9pm-4am" },
        { month: "September", day: 28, week: "friday", title: "The Legendary DJ Supernova", time: "9pm-4am" },
        { month: "September", day: 28, week: "friday", title: "The Legendary DJ Supernova", time: "9pm-4am" },
        { month: "September", day: 28, week: "friday", title: "The Legendary DJ Supernova", time: "9pm-4am" }
    ];

    return (
        <div className="event">
            <section className="event__left">
                <img src="https://picsum.photos/450/550" />
                <div class="event__left__desc">
                    <div class="event__left__desc__text">Your description here</div>
                </div>
            </section>
            <section className="event__right">
                <input className="event__search" type="text" />
                <ul className="event__list">
                    {
                        events.map((event, index) => (
                            <li key={index} className="event__list__item">
                                <div className="event__list__item__date">
                                    <span className="event__list__item__date__day">{event.day}</span>
                                    <span className="event__list__item__date__mw">
                                        <span>{event.month}</span>
                                        <span>{event.week}</span>
                                    </span>
                                </div>
                                <div className="event__list__item__title">
                                    <span>{event.title}</span>
                                </div>
                                <div className="event__list__item__time">
                                    <span>{event.time}</span>
                                </div>
                                <div className="event__list__item__btn">
                                    <a href="#">Book Event</a>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
}

export default Event;