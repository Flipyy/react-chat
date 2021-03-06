const validate = ({isAuth, values, errors}) => {
    const rules = {
        email: (value) => {
            if (!value) {
                errors.email = "Введите E-Mail"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                ) {
                errors.email = "Неверный E-Mail"
            }
        },
        fullname: (value) => {
            if (!value) {
                errors.fullname = "Введите имя"
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = "Введите пароль"
            } else if (
                !isAuth &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = "Слишком легкий пароль"
            }
        },
        password_2: value => {
            if (!isAuth && value !== values.password) {
                errors.password_2 = "Пароли не совпадают"
            }
        }
    }
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}

export default validate