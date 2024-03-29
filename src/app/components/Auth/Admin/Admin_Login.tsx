/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {useFormik} from 'formik'
import {loginSchema,initialValues} from './Form_Settings'
import 'react-toastify/dist/ReactToastify.css'
import {Link, useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'
import toast, {Toaster} from 'react-hot-toast'
import { useAuth } from '../../../modules/auth'
import { getUserByToken, login } from '../../../modules/auth/core/_requests'

type Props = {
  closeModal: (value: boolean) => void
}

const Admin_Login: React.FC<Props> = ({closeModal}) => {
  const [loading, setLoading] = useState(false)
  const [incorrectLogin, setIncorrectLogin] = useState(false)
  const navigate = useNavigate()
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
        closeModal(false)
        navigate('/config')
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
        setIncorrectLogin(true)
        toast.error('wrong email or password')
      }
    },
  })
  const intl = useIntl()

  return (
    <form className='' onSubmit={formik.handleSubmit} noValidate id='kt_login_signin_form'>
      <Toaster />
      {/* begin::Heading */}
      <div className='text-center'>
        <h1 className='text-dark fw-bolder mb-3'>
          {intl.formatMessage({id: 'AUTH.ADMINLOGIN.TITLE'})}
        </h1> 
      </div> 

      <div className='fv-row'>
        <label className='form-label fs-6 fw-bolder text-dark'></label>
        <input
          placeholder='Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <span role='alert'>{formik.errors.email}</span>
          </div>
        )}
      </div>
      <div className='fv-row mb-6'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'></label>
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      <div className='d-grid'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && (
            <span className='indicator-label'>
              {intl.formatMessage({id: 'AUTH.LOGIN.CONTINUE'})}
            </span>
          )}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              {intl.formatMessage({id: 'AUTH.LOGIN.WAIT'})}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button> 
      </div> 
    </form>
  )
}
export default Admin_Login
