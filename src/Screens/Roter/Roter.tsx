import React, { useState, useEffect } from 'react';
import ArrayShuffler from '../../Utils/ArrayShuffler';
import {
  RoterImage
} from './../../Images';
import RenderIf from '../../Utils/RenderIf';
import RenderQuestion from './components/Question'
import { questions, answers, IQuestion } from '../../Tests/Roter'


interface IQuestions {
  questions: Array<IQuestion>
}

function RenderQuestions({ questions }: IQuestions) {
  const [userAnswers,setUserAnswers] = useState<Array<any>>(new Array(questions.length+1));
  const [index, setIndex] = useState(0);

  const setAnswer = (answer: any) => {
    const ansS = userAnswers;
    ansS[questions[index].number] = answer;
    setUserAnswers(ansS);
    console.log(userAnswers)
    setIndex(index + 1)
  }
  console.log(index>=questions.length-1)
  console.log(index,questions.length-1,index>questions.length-1)
  return (
    <div style={{
      display: 'flex',
      flexBasis: '50%',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
    }}>
      <p style={styles.question}> {index+1+'/'+questions.length}</p>
      {RenderIf(index > questions.length-1,
        <RenderResult userAnswers={userAnswers} answers={answers}/>
        ,
        <RenderQuestion 
        firstQuestion={questions[index]?.ა}
        secondQuestion={questions[index]?.ბ}
        onAnswer={setAnswer}
      />
      )}
    </div>
  )
}

interface IResultProps{
  userAnswers:Array<string>;
  answers:any;
}

function RenderResult({userAnswers,answers}: IResultProps) {
  
  const [point,setPoint] = useState(0);
  useEffect(() => {
    let p = 0;
    for(let i=0;i<userAnswers.length;i++){
      if(userAnswers[i] == answers[i] && answers[i] && userAnswers[i]){
        console.log(i,userAnswers[i],answers[i])
        p++;
      }      
    }
    setPoint(p);

  }, [userAnswers])

  console.log(userAnswers)
  return (
    <div>
      <p
        style={{
          color:'white',
          fontSize:30
        }}
      >{point}</p>
    </div>
    
  )
}

const styles = {
  question: {
    color: 'white',
    padding: 5,
    margin: 10,
    fontSize: 24
  },
  questionContainer: {

  }
}

export default () => {

  const shuffledQuestions = ArrayShuffler(questions)

  return (
    <div style={{
      backgroundImage: "url(" + RoterImage + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    }}>
      <p style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        margin: 'auto'
      }}>როტერის ტესტი</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          backgroundColor: '#000000d6',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 5,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <RenderQuestions questions={shuffledQuestions} />
        </div>
      </div>
    </div>
  )
}







