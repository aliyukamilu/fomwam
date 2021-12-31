import React from 'react'

function Cards(props) {
    return (
        <div className="col-md-3">
            <div class="card">
                <div className="cardhead d-flex justify-content-center py-5" style={{ background: `${props.bgColor}`}}>
                    <img src={require(`../img/icons/${props.img}`)} alt="notification" className="imgCard" />
                </div>
                <div class="card-body p-3">
                    <div className="card-title courseTitle">{props.name}</div>
                </div>
            </div>
        </div>
    )
}

export default Cards
