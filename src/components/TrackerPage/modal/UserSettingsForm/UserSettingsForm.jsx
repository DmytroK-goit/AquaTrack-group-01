import { Field, Form, Formik } from "formik";
import s from "./UserSettingsForm.module.css";

const UserSettingsForm = () => {
	return (
		<div className={s.userSettingsWraper}>
			<div className={s.userSettings__block}>
				<h3 className={s.userSettings__title}>Setting</h3>
				<div className={s.userProfile}>
					<img src="/userSettingsModalImg/user_x1.png" alt="" />
					<div className={s.userProfileUpload}>
						<svg className={s.uploadIcon}>
							<use href="/icons.svg#icon-upload"></use>
						</svg>
						<p className={s.profileText}>Upload a photo</p>
					</div>
				</div>
			</div>
			<div>
				<Formik>
					<Form className={s.userSettings__Form}>
						<div className={s.userSettings__form_item_one}>
							<div className={s.userSettings__block_radio}>
								<label className={s.userSettings__label_title}>
									Your gender identity
								</label>
								<div className={s.userSettings__radioBtnContainer}>
									<label className={s.userSettings__radioBtnLabel}>
										<Field
											type="radio"
											name="gender"
											value="female"
											className={s.userSettings__btn_radio}
										/>
										<span className={s.userSettings__radioBtn}></span>
										<span className={s.userSettings__label_text}>Woman</span>
									</label>
									<label className={s.userSettings__radioBtnLabel}>
										<Field
											type="radio"
											name="gender"
											value="male"
											className={s.userSettings__btn_radio}
										/>
										<span className={s.userSettings__radioBtn}></span>
										<span className={s.userSettings__label_text}>Man</span>
									</label>
								</div>
							</div>

							<div className={s.userSettings__block_person}>
								<div className={s.userSettings__blokNameEmail}>
									<label htmlFor="name" className={s.userSettings__label_title}>
										Your name
									</label>
									<Field
										id="name"
										name="name"
										className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
									/>
								</div>
								<div className={s.userSettings__blokNameEmail}>
									<label
										htmlFor="email"
										className={s.userSettings__label_title}
									>
										Email
									</label>
									<Field
										id="email"
										name="email"
										type="email"
										className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
									/>
								</div>
							</div>

							<div className={s.userSettings__containerInfo}>
								<label className={s.userSettings__label_title}>
									My daily norma
								</label>
								<div className={s.userSettings__blockInfo}>
									<div className={s.userSettings__infoFormula}>
										<p className={s.userSettings__label_text}>For Woman:</p>
										<p className={s.userSettings__formula_text}>
											V=(M*0,03) + (T*0,4)
										</p>
									</div>
									<div className={s.userSettings__infoFormula}>
										<p className={s.userSettings__label_text}>For Man:</p>
										<p className={s.userSettings__formula_text}>
											V=(M*0,04) + (T*0,6)
										</p>
									</div>
								</div>
								<p className={s.userSettings__infoText}>
									<span className={s.userSettings__infoSimbol}>*</span> V is the
									volume of the water norm in liters per day, M is your body
									weight, T is the time of active sports, or another type of
									activity commensurate in terms of loads (in the absence of
									these, you must set 0)
								</p>
								<p className={s.userSettings__label_text}>
									<svg className={s.userSettings__emojiIcon}>
										<use href="/icons.svg#icon-emoji"></use>
									</svg>
									Active time in hours
								</p>
							</div>
						</div>

						<div className={s.userSettings__form_item_two}>
							<div className={s.userSettings__blokInputNameEmail}>
								<div className={s.userSettings__blokNameEmail}>
									<label
										htmlFor="weight"
										className={s.userSettings__label_text}
									>
										Your weight in kilograms:
									</label>
									<Field
										id="weight"
										name="weight"
										type="number"
										className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
									/>
								</div>

								<div className={s.userSettings__blokNameEmail}>
									<label
										htmlFor="activityLevel"
										className={`${s.userSettings__label_text} ${s.required}`}
									>
										The time of active participation in sports:
									</label>
									<Field
										id="activityLevel"
										name="activityLevel"
										type="number"
										className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
									/>
								</div>
							</div>

							<div className={s.userSettings__containerWater}>
								<div>
									<label
										className={`${s.userSettings__label_text} ${s.required}`}
									>
										The required amount of water in liters per day:&nbsp;
										<br />
										<strong className={s.userSettings__infoSimbol}>1.8L</strong>
									</label>
								</div>

								<div className={s.userSettings__blokNameEmail}>
									<label
										htmlFor="dailyRequirement"
										className={s.userSettings__label_title}
									>
										Write down how much water you will drink:
									</label>
									<Field
										id="dailyRequirement"
										name="dailyRequirement"
										type="number"
										step="0.1"
										min="0.2"
										max="15"
										value="1.8"
										className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
									/>
								</div>
							</div>
						</div>
					</Form>
				</Formik>
			</div>
			<button type="submit" className={s.UserSettingsButton}>
				Save
			</button>
		</div>
	);
};

export default UserSettingsForm;
