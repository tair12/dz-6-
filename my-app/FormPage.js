import React, {useState} from 'react';



function FormPage() {
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        gender: "",
        status: false
    })

    const changeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const changeRadio = () => {
        setForm({
            ...form,
            status: true
        })
    };

    const submit = () => {
        console.log(form)
        if (form.name === "" && form.lastname === "" && form.gender === ""){
            alert("Заполните все поля")
        }
        else if (form.lastname === "" && form.gender === "") {
            alert("Заполните поля lastname и gender")
        }
        else if (form.name === "" && form.gender === "") {
            alert("Заполните поля name и gender")
        }
        else if (form.name === "" && form.lastname === "") {
            alert("Заполните поля name и lastname")
        }
        else if (form.name === ""){
            alert("Заполните поле name")
        }
        else if (form.lastname === ""){
            alert("Заполните поле lastname")
        }
        else if (form.gender === ""){
            alert("Заполните поле gender")
        }
    };

    return (
        <div>
            <input type="text"
                   placeholder="Name"
                   name="name"
                   onChange={changeInput}/>

            <input type="text"
                   placeholder="Lastname"
                   name="lastname"
                   onChange={changeInput}/>

            <select name="gender" id="select" onChange={changeInput}>
                <option value="">Выберите пол</option>
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
            </select>

            <input type="radio"
                   name="status"
                   onChange={changeRadio}/>
            <div>
                <button onClick={submit}>SEND</button>
            </div>
        </div>
    );
}

export default FormPage;
