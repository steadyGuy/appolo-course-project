import { IRegisterForm } from 'pages/types';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form';

type RegisterFormProps = {
  onSubmit: (registerForm: IRegisterForm) => any
}

const initialFormState = {
  avatar: '',
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

export const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState<IRegisterForm>(initialFormState);

  const { register, handleSubmit } = useForm<IRegisterForm>();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setForm(prev => ({ ...prev, [name]: value }));
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          type="avatar"
          className="form-control"
          {...register("avatar")}
          id="avatar" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          className="form-control"
          id="username"
          {...register("username")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          {...register("email")}
          id="email" />

      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="passwordConfirmation"
          className="form-control"
          id="passwordConfirmation"
          {...register("passwordConfirmation")}
        />
      </div>
      <button
        type="submit"
        className="btn btn-main bg-blue py-2 ttu">Submit</button>
    </form>
  );
}
