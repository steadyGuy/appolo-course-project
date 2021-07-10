import { RegisterForm } from 'components/forms/RegisterForm'
import React, { useEffect } from 'react'
import { IRegisterForm } from './types'
import { useCreateUser } from 'apollo/actions';
import withApollo from 'hoc/withApollo';
import { useRouter } from 'next/router';

const Register = () => {

  const [createUser] = useCreateUser();
  const router = useRouter();

  // useEffect(() => {
  //   console.log(error)
  // }, [error])

  const onSubmit = async (registerData: IRegisterForm) => {
    try {
      const { data, error }: any = await createUser({ variables: registerData });
      console.log(error)
      if (data.signUp) {
        router.push('/login')
      }
    } catch (error) {
      console.log('HERE')
    }
  }

  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Register</h1>
            <RegisterForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo(Register);
