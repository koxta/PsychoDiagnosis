import React, { useEffect, createRef } from 'react'

interface IProps{
  firstQuestion:string;
  secondQuestion:string;
  onAnswer:Function;
}

export default ({firstQuestion,secondQuestion,onAnswer}:IProps) => {

  let radio1 = createRef<HTMLInputElement>();
  let radio2 = createRef<HTMLInputElement>();

  useEffect(() => {
    if (radio1.current && radio2.current) {
      radio1.current.checked = false;
      radio2.current.checked = false;
    }
  }, [firstQuestion,secondQuestion]);

  return (
    <div style={{
      backgroundColor: '#120e25b9',
      flex: 1,
      display: 'grid',
      flexDirection: "column",
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 20,
      maxWidth: '1000px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <input ref={radio1} style={styles.question} id={`firstQuestion`} name={`question`} type={'radio'}></input>
        <label htmlFor={`firstQuestion`}>
          <p style={styles.question}>{firstQuestion}</p>
        </label>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <input ref={radio2} style={styles.question} id={`secondQuestion`} name={`question`} type={'radio'}></input>
        <label htmlFor={`secondQuestion`}>
          <p style={styles.question}>{secondQuestion}</p>
        </label>
      </div>
      <button style={{
        margin: 30,
        fontSize: 32,
        padding: 5,

        alignSelf: 'flex-end'

      }} type='button'
        onClick={() => {
          if (radio1.current && radio2.current) {
            if(radio1.current.checked) onAnswer('ა');
            else if(radio2.current.checked) onAnswer('ბ');
            else {
              console.log('check!!!');
            }
        }
        }}
      >შემდეგი</button>
    </div>)
}

const styles = {
  question: {
    color: 'white',
    padding: 5,
    margin: 10,
    fontSize: 24
  },

}