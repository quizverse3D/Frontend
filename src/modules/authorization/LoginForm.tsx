import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/ui/Input/Input';
import Button from '@/ui/Button/Button';
import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  username: string;
  password: string;
}

// Тестовая заглушка API
async function fakeLoginApi({ username, password }: LoginFormInputs) {
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({ success: true });
      } else {
        resolve({ success: false, error: 'Неверный логин или пароль' });
      }
    }, 800);
  });
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInputs>();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    setError(null);
    const result = await fakeLoginApi(data);
    if (!result.success) {
      setError(result.error || 'Ошибка авторизации');
    } else {
      // TODO: обновить глобальное состояние пользователя
      navigate('/');
    }
  };

  return (
    <form className={styles.LoginForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Логин"
        {...register('username', { required: 'Введите логин' })}
        disabled={isSubmitting}
      />
      {errors.username && <div className={styles.error}>{errors.username.message}</div>}
      <Input
        label="Пароль"
        type="password"
        {...register('password', { required: 'Введите пароль' })}
        disabled={isSubmitting}
      />
      {errors.password && <div className={styles.error}>{errors.password.message}</div>}
      {error && <div className={styles.error}>{error}</div>}
      <Button type="submit" disabled={isSubmitting}>Войти</Button>
    </form>
  );
};

export default LoginForm; 