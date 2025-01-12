import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import s from "./UserSettingsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../redux/UserAuth/selectors.js";
import { updateUser } from "../../../../redux/UserAuth/operations.js";

const UserSettingsForm = () => {
	const dispatch = useDispatch();

	const { name, email, gender, weight, activeTime, dailyNorm } =
		useSelector(selectUser);

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, "Name must be at least 3 characters long")
			.max(20, "Name must not exceed 20 characters")
			.required(),
		email: Yup.string().email("Invalid email address"),
		gender: Yup.string().required(),
		weight: Yup.number().nullable().max(500, "Weight must not exceed 500 kg"),
		activeTime: Yup.number()
			.nullable()
			.min(0, "Activity level cannot be negative")
			.max(24, "Activity level cannot exceed 24 hours")
			.integer("Activity level must be a whole number"),
		dailyNorm: Yup.number().positive(),
	});

	const initialValues = {
		name,
		email,
		gender,
		weight: weight || 0,
		activeTime: activeTime || 0,
		dailyNorm,
	};

	const handleSubmit = async (values) => {
		const formData = {
			name: values.name,
			gender: values.gender,
			weight: values.weight,
			activeTime: values.activeTime,
			dailyNorm: values.dailyNorm,
		};
		dispatch(updateUser(formData));
	};

	const formatMillilitersToLiters = (milliliters) =>
		(milliliters / 1000).toFixed(1);

	const litersToMilliliters = (liters) => liters * 1000;

	const calculateWaterIntake = (weight, activeTime, gender) => {
		return gender === "woman"
			? (weight * 0.03 + activeTime * 0.4).toFixed(1)
			: (weight * 0.04 + activeTime * 0.6).toFixed(1);
	};

	return (
		<div className={s.userSettingsWraper}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ setFieldValue, values }) => (
					<Form className={s.userSettings__Form}>
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
												value="woman"
												className={s.userSettings__btn_radio}
											/>
											<span className={s.userSettings__radioBtn}></span>
											<span className={s.userSettings__label_text}>Woman</span>
										</label>
										<label className={s.userSettings__radioBtnLabel}>
											<Field
												type="radio"
												name="gender"
												value="man"
												className={s.userSettings__btn_radio}
											/>
											<span className={s.userSettings__radioBtn}></span>
											<span className={s.userSettings__label_text}>Man</span>
										</label>
									</div>
								</div>

								<div className={s.userSettings__block_person}>
									<div className={s.userSettings__blokNameEmail}>
										<label
											htmlFor="name"
											className={s.userSettings__label_title}
										>
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
										<span className={s.userSettings__infoSimbol}>*</span> V is
										the volume of the water norm in liters per day, M is your
										body weight, T is the time of active sports, or another type
										of activity commensurate in terms of loads (in the absence
										of these, you must set 0)
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
											htmlFor="activeTime"
											className={`${s.userSettings__label_text} ${s.required}`}
										>
											The time of active participation in sports:
										</label>
										<Field
											id="activeTime"
											name="activeTime"
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
											<strong className={s.userSettings__infoSimbol}>
												{formatMillilitersToLiters(
													calculateWaterIntake(
														values.weight,
														values.activeTime,
														values.gender
													) * 1000
												)}
												L
											</strong>
										</label>
									</div>

									<div className={s.userSettings__blokNameEmail}>
										<label
											htmlFor="dailyNorm"
											className={s.userSettings__label_title}
										>
											Write down how much water you will drink:
										</label>
										<Field
											id="dailyNorm"
											name="dailyNorm"
											type="number"
											step="0.1"
											min="0.2"
											max="15"
											value={formatMillilitersToLiters(values.dailyNorm)} // Синхронизация с Formik
											onChange={(e) => {
												const convertedValue = litersToMilliliters(
													e.target.value
												);
												setFieldValue("dailyNorm", convertedValue); // Обновляем значение в Formik
											}}
											className={`${s.userSettings__inputStyle} ${s.userSettings__label_text}`}
										/>
									</div>
								</div>
							</div>
						</div>
						<button type="submit" className={s.UserSettingsButton}>
							Save
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UserSettingsForm;
