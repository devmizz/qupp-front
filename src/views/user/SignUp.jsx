import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { SET } from '../../constants/types';
import {
  signUp,
  isDuplicateEmail,
  isDuplicateNickname,
} from '../../util/axios/user/signUpApi';
import { setCookie } from '../../util/cookie';
import { useEffect } from 'react';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
    validPassword: '',
    showPassword: false,
  });

  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);

  const handleChange = (prop) => (e) => {
    e.preventDefault();
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: values.email,
      password: values.password,
      nickname: values.nickname,
    };

    axios(body);
  };

  useEffect(() => {
    isDuplicateEmail(values.email).then((res) =>
      res ? setIsEmailDuplicate(true) : setIsEmailDuplicate(false)
    );
  }, [values.email]);

  useEffect(() => {
    isDuplicateNickname(values.nickname).then((res) =>
      res ? setIsNicknameDuplicate(true) : setIsNicknameDuplicate(false)
    );
  }, [values.nickname]);

  // ?????? ???????????? ?????? ?????? ???????
  async function axios(body) {
    const signUpData = await signUp(body);

    if (signUpData) {
      const user = signUpData.data.responseUser;

      const data = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      };

      localStorage.setItem('user', JSON.stringify(data));

      setCookie('token', signUpData.data.jwtToken);

      dispatch({
        type: SET,
        payload: data,
      });

      navigate(`/`);
    }
  }

  return (
    <div className="flex justify-center mt-3 container">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}
      >
        {/* ????????? */}
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">?????????</div>
          <TextField
            error={isEmailDuplicate}
            fullWidth
            id="outlined-email"
            value={values.email}
            color="primary"
            onChange={handleChange('email')}
          />
          {isEmailDuplicate && (
            <FormHelperText>?????? ???????????? ??????????????????</FormHelperText>
          )}
        </div>
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">????????????</div>
          <FormControl sx={{ width: '35ch' }} variant="outlined">
            <OutlinedInput
              error={values.password !== values.validPassword}
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">
            ???????????? ??????
          </div>
          <FormControl sx={{ width: '35ch' }} variant="outlined">
            <OutlinedInput
              error={values.password !== values.validPassword}
              id="outlined-adornment-checkedPassword"
              type={values.showPassword ? 'text' : 'password'}
              value={values.validPassword}
              onChange={handleChange('validPassword')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {values.password !== values.validPassword ? (
              <FormHelperText>??????????????? ????????????</FormHelperText>
            ) : (
              ' '
            )}
          </FormControl>
        </div>
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">?????????</div>
          <TextField
            error={isNicknameDuplicate}
            fullWidth
            id="outlined-nickname"
            value={values.nickname}
            onChange={handleChange('nickname')}
          />
          {isNicknameDuplicate && (
            <FormHelperText>?????? ???????????? ??????????????????</FormHelperText>
          )}
        </div>
        <Button type="submit" variant="contained">
          ????????????
        </Button>
      </Box>
    </div>
  );
}
