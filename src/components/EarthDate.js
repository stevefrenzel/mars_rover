import React from 'react';

export default class EarthDate extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='component' id='earth_date_component'>
                    <h1>EarthDate.js</h1>
                    <input type="date" name="earth_date" />
                </div>
            </React.Fragment>
        )
    }
}