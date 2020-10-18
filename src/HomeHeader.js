import React, { useState } from 'react'
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { auth } from './firebase.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function HomeHeader({ user }) {
    const history = useHistory('');

    if (user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
    }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to="/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEU7WZj///88WpdAXZpBX5tFY51FYZ3t7/V6jbgoS48vUJLS2OdSa6M3VZZuhLK2wNf3+fvd4u2Imr9NaKHEzeDv8ffh5uxje6ns7/E4V5oxUpjW3eR7j7Rddank6PHByt6dq8uQoMMjR42VpMCLnbvDzNmsuM20v9FVb6KntdFieqy0v9i8xtyYqMl+kbsdQYosT5qClrY1QXhgAAAE+ElEQVR4nO3dbXuiOBSA4QACBhoE8aVa8XWcqqjd/v8/t6LtzuzsKgdiICfXeb7ONZG7QaMGWmbdGr1/Zqnnei7+PM9Lxz+2/peM3Xyb3WTCDOqiGf98/SXcjs3yXZuI7tu3cOFO2z4cBdlsmr3dhFvPvAm8Nc1GhXA0NnEGiy6zOIsvwo2pM1jkvFtstDNZOIli9m4ykDFvy2ZmC50Z27V9DIrbMa/tQ1CcxzptH4LabIeE2CMh/kiIPxLij4T4IyH+SIg/EuKPhPgjYduJouCa+KdKI+grvMGE7bnpy7U0dV3Psb//5QtdOo6ewsIgvKy72h/DMJn7vj8vSpIkDAeLXr5frvrn6JClrl06lobCYoacQ7+XxLH1oPiSP8+9slnUTih4kHb380e235unQcmAegltwdlhH0J5lxIXl5CLKAdPH0JhwLPcL0fhFXK2rOpDJRTrqMrzD58wCE7VJxCTMHD2dXx4hLzTqwfEIuTpoCYQiTBwawNRCO3ArnuK4hDaQizrAzEIGe8//AiBX8gPiQQQgVCwowwQgVDuHEUgFI7UOaq/UAQnOaD2wuCl2uddhELZKdRdKFzJZ6HuQlv2hVR7IRP133HjEAaHWh/rEQnXJ+mTVG+hCORPUr2F8ouh7kJ+HsoLtd634FW+Xhsm4eLYy/+st9R470nA14rhYHnOUufyzBV/FOi8QxpA39DE+YFxHvxHB9zxbk/IgathEgW82s79v2tReAathmEGOBMf1aJwBQHOM6kJZK0+D0EvpX1ZYHtCIXIAcOCULXeltSdkC4DwxKUfqDVh0AEsh/MDZiFkO2bgSZ+kLQpTwKZ2T3KlKNJbuJQ/SVsUvpQL45XpwmF/Lf9AegvPvPzaw7K0FvpdEgIiobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKst4oQ0UPuGRVAoFv99HByCMPh6MUAT40l+lUKTR/Q7n8m384fLwYITrKO3u4wfnoX+/IWCT+9H/v47RW5cSVQp5v9wg2b78S3HcwnhlvBDwYotbOMzKX0xxC/203ddS9cKEmS4ctLziqxfmgHd1qIUxZJ8ft7BvvDAyXQhZDnEL54DlELcwdEwXHgELPm7hHnLZG2ZhvIJcuYhaeDZeGJku9HemC5PSu7qwCweQ5RC1MIcsh6iFJ9BvMsUs7IMu5McsBC0WmIUx5LMTauH8BXQzBmJhWHoLMHbhArRYYBbuYb/2WqlwpVS4hN31pXSHNOrdLz+W3+gcD/L7Axwj2F1faq9U+P8bzK+tAXd2+d2PByMAb2trTchBwrU0UPurTfBeT2P+FUMkJCE8EiqLhCQER0JlkZCE4EioLBKSEBwJlUVCEoIjobJISEJwJFQWCUkIjoTKIiEJwZFQWSQkITgSKouEJARHQmWRkITgSKgsEpIQHAmVRUISgiOhskhIQnAkVBYJSQiOhMoiIQnBkVBZJCQhOBIqi4TPFDpPON7qNSl0n3C81WtO6LLxE463eo0JL77Pifwo1WtM2PnBtkYLRfrGXseTJ5wLVWtKOJnFzPr5jCOuWkNC4W0tZr12p6zxWWxION3EF6H1lk2fctRVakb41+zVKoRtEJsQikkBvAqt0cxp+BVV/V+0EhN3UwBvQiveRp7T5Ps3kPBcX+g46Wx7+4NL7Gu4ePuZpa7XVCwLrfhxF6GoO3w63rx9/6D+BncElkevYj5cAAAAAElFTkSuQmCC" alt="Facebook Logo" className="homeHeader__logo" />
                </Link>
            </div>

            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Search" />
                <SearchIcon className="homeHeader__inputButton" />
            </div>
            <div className="homeHeader__icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader__name">{user?.displayName}</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Find Friends</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Create</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <a onClick={logout}><p>Logout</p></a>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader__dash"> | </h3>
            </div>
        </div>
    )
}

export default HomeHeader
