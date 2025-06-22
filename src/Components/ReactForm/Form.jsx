import React, { useReducer, useState } from 'react'

const formReducer = (state, event)=>{
    if (event.reset) {
        return {
            name: '',
            apple: '',
            count: 0,
            'gift-wrap': false
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}
const Form = ()=>{
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useReducer(formReducer, {
        count: 100,
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmitting(true);
        setTimeout(()=>{
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000)
        // alert('You have submitted the form.')
    }

    const handleChange = event=>{
        const isCheckbox = event.target.type === 'checkbox'
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value
        })
    }
    return(
        <div className='form'>
            <h2>How About Them Apples</h2>
            {submitting && <div>
                You are Submitting the following
                <ul>
                    {Object.entries(formData).map(([name, value])=>(
                        <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                    ))}
                </ul>
                </div>}
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <label htmlFor="">Name:
                        <input type="text" name='name' onChange={handleChange} value={formData.name} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label htmlFor="">
                        <p>Apple</p>
                        <select name="apple" onChange={handleChange} value={formData.apple} >
                            <option value="">Please Chose a Value</option>
                            <option value="fuji">Fuji</option>
                            <option value="jonathan">Jonathan</option>
                            <option value="honey-crisp">Honey Crisp</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <p>Count</p>
                        <input type="number" name="count" onChange={handleChange} value={formData.count || ''} />
                    </label>
                    <label htmlFor="">
                        <p>Gift Wrap</p>
                        <input type="checkbox" name="gift-wrap" onChange={handleChange} checked = {formData.giftWrap} disabled={formData.apple !== 'fuji'}/>
                    </label>
                </fieldset>
                <button type='submit' disabled={submitting}>Submit</button>
            </form>
        </div>
    )
}

export default Form;