import React from 'react'
import style from './page.module.scss'

const Contact = () => {
  return (
    <div className={style.contact}>
      <h1>I`m interested in your thoughts</h1>
      <div className={style.content}>
        <div className={style.containerIcon}>photo</div>
        <form name='form'>
          <input name='name' type='text' placeholder='name'></input>
          <input name='email' type='text' placeholder='email'></input>
          <textarea
            name='message'
            placeholder='message'
            cols={30}
            rows={10}
          ></textarea>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact