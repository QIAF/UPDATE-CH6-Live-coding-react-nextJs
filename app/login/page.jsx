'use client';

import { useFormState } from 'react-dom';
import classes from './page.module.css';
import { MealsFormSubmit } from '@/components/meals/meals-form-submit';
import { shareMeal, signInAction } from '@/libs/action';
import { redirect } from 'next/dist/server/api-utils';
import {LoginFormSubmit} from '@/components/login/login-button-submitzsxcv';

export default function LoginPage() {
	const [state, formAction] = useFormState(signInAction, { message: null });

	if (state.status === 'success') {
		redirect("/")
	}
	return (
		<>
			<header className={classes.header}>
				<h1>
					Login in your account <span className={classes.highlight}>l</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form
					className={classes.form}
					action={formAction}>
					<div className={classes.row}>
						<p>
							<label htmlFor='name'>Your name</label>
							<input
								type='text'
								id='name'
								name='name'
								required
							/>
						</p>
						<p>
							<label htmlFor='email'>Your email</label>
							<input
								type='email'
								id='email'
								name='email'
								required
							/>
						</p>
					</div>

					{state.message && <p>{state.message}</p>}

					<p className={classes.actions}>
						<LoginFormSubmit type={'submit'} />
					</p>
				</form>
			</main>
		</>
	);
}
