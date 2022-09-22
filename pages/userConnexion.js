import Head from 'next/head'
import { useForm  } from "react-hook-form"

export default function userConnexion() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Head>
        <title>Connexion</title>
      </Head>

      <div className={"h-100vh p-20 flex flex-column justify-content-center align-items-center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}