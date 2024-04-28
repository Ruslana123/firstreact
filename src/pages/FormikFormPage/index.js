import {Formik, Form, Field} from "formik";


function FormikFormPage() {

    return (
       <Formik
          initialValues={{
              username: "",
              email: "",
              phone: "",
              isSubscribed: false,
              gender: "male",
          }}

          validate={(values) => {
              const errors = {};
              if(!values.username) {
                  errors.username = "Введіть ім'я";

              }
              if(!values.email) {
                  errors.email = "Введіть email";

              } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
                  errors.email = "Введіть правильний email";
              }
              if(!values.phone) {
                  errors.phone = "Введіть телефон";

              } else if (values.phone.length < 12) {
                  errors.phone = 'Телефон повинен містити лише 12 цифр';

              }

              return errors;

          }}

          onSubmit={(values) => {

              console.log("Надсилаємо дані на сервер...",  values);
          }}

       >
           {
               ({errors, touched}) => (

                   <Form style={{
                       display: "flex",
                       flexDirection: "column",
                       width: "300px"

                   }}>
                       <Field type="text" name="username" placeholder="user name"/>
                       {errors.username && touched.username && <span style={{color: "red"}}>{errors.username}</span>}
                       <Field type="text" name="email" placeholder="email"/>
                       {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
                       <Field type="tel" name="phone" placeholder="phone" />
                       {errors.phone && <span style={{color: "red"}}>{errors.phone}</span>}
                       <label>
                           <Field type="checkbox" name="isSubscribed"/>
                           Підписка на новини
                       </label>
                       <label>
                           <Field type="radio" value="female" name="gender" />
                           Жінка
                       </label>
                       <label>
                           <Field type="radio" name="gender" value="male" />
                           Чоловік
                       </label>
                       <button type="submit">Submit</button>
                   </Form>
               )
           }

       </Formik>
    );
}

export default FormikFormPage;