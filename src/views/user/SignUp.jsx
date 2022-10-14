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

  // 얘는 다른데로 가야 하지 않나?
  async function axios(body) {
    const signUpData = await signUp(body);

    if (signUpData) {
      const token = signUpData.data.jwtToken;

      const user = signUpData.data.responseUser;

      const data = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      };

      localStorage.setItem('user', data);

      dispatch({
        type: SET,
        payload: data,
      });

      setCookie('token', token);

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
        {/* 이메일 */}
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">이메일</div>
          <TextField
            error={isEmailDuplicate}
            fullWidth
            id="outlined-email"
            value={values.email}
            color="primary"
            onChange={handleChange('email')}
          />
          {isEmailDuplicate && (
            <FormHelperText>이미 존재하는 이메일입니다</FormHelperText>
          )}
        </div>
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">비밀번호</div>
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
            비밀번호 확인
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
              <FormHelperText>비밀번호가 다릅니다</FormHelperText>
            ) : (
              ' '
            )}
          </FormControl>
        </div>
        <div>
          <div className="m-1 font-bold text-sky-700 text-lg">닉네임</div>
          <TextField
            error={isNicknameDuplicate}
            fullWidth
            id="outlined-nickname"
            value={values.nickname}
            onChange={handleChange('nickname')}
          />
          {isNicknameDuplicate && (
            <FormHelperText>이미 존재하는 닉네임입니다</FormHelperText>
          )}
        </div>
        <Button variant="contained">회원가입</Button>
      </Box>
    </div>
  );
}
