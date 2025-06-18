import React from 'react';
import Alert from './Alert'

export default function CartSuccess() {
    const style = {
        header: {
            width: '100%'
        },
        item: {
            marginRight: 20
        },
        wrapper: {
            borderTop: 'black solid 1px',
            display: 'flex',
            flexWrap: 'wrap'
        }
    }
    return (
        <div>
            <Alert title="Added to Cart" type="success">
                <div style={style.wrapper}>
                    <h2 style={style.header}>
                        You have added 2 items:
                    </h2>
                    <div style={style.item}>
                        <div>Bananas</div>
                        <div>Quantity: 2</div>
                    </div>
                    <div style={style.item}>
                        <div>Lettuce</div>
                        <div>Quantity: 1</div>
                    </div>
                </div>
            </Alert>
        </div>
    )
}