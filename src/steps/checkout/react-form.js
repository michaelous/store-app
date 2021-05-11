import React from "react";
import {useForm} from "react-hook-form";

export const Form = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = async (data) => {
        reset();
    };


    return (
        <form className={"react-hook-form"} onSubmit={handleSubmit(onSubmit)}>
            <section>
                <label htmlFor="nameSurname">Full Name</label>
                <input placeholder="Name / Surname" {...register("nameSurname", {
                    required: "Required",
                    pattern: {
                        value: /(\w.+\s).+/,
                        message: "Missing Surname"
                    }
                })} />
                {errors.nameSurname && <span role="alert">{errors.nameSurname.message}</span>}

                <label htmlFor="city">City</label>
                <input placeholder="City"  {...register("city", {
                    required: "Required",
                    minLength: {
                        value: 3
                    }
                })} />
                {errors.city && <span role="alert">{errors.city.message}</span>}

                <label htmlFor="streetAddress">Street Address</label>
                <input placeholder="street Address" {...register("streetAddress", {
                    required: "Required",
                    pattern: {
                        value: /^\w+?\s\d+$/,
                        message: "Street and number"
                    }
                })} />
                {errors.streetAddress && <span role="alert">{errors.streetAddress.message}</span>}

                <label htmlFor="postal">Postal</label>
                <input {...register("postal", {
                    required: "Required post-code: 4 to 6 digits",
                    pattern: {
                        value: /[\s-]+/,
                        message: "Veryfiy pattern"
                    },
                    minLength: {
                        value: 4,
                        message: "Minimum 4"
                    },
                    maxLength: {
                        value: 6,
                        message: "Maximum 6"
                    }
                })}
                       type="postal"
                       placeholder="00-000"
                />
                {errors.postal && <span role="alert">{errors.postal.message}</span>}

                <label htmlFor="email">E-mail</label>
                <input {...register("email", {
                    required: "Required to send information about order & shipping",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Wrong format"
                    }
                })}
                       type="email"
                       placeholder="example@mail.com"
                />
                {errors.email && <span role="alert">{errors.email.message}</span>}
            </section>
            <button className={"submitBtn"} type="submit">SUBMIT</button>
        </form>
    );
}
