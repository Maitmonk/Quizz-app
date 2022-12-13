const quizData=[
    {
        question:'Which of the following statements are TRUE about an SQL query? P : An SQL query can contain a HAVING clause even if it does not have a GROUP BY clause Q : An SQL query can contain a HAVING clause only if it has a GROUP BY clause R : All attributes used in the GROUP BY clause must appear in the SELECT clause S : Not all attributes used in the GROUP BY clause need to appear in the SELECT CLAUSE',
        a:'P and R',
        b:'P and S',
        c:'Q and R',
        d:'Q and S',
        correct:'b'
    },
    {
        question:'Which of the following concurrency control protocols ensure both conflict serializability and freedom from deadlock? I. 2-phase locking II. Time-stamp ordering',
        a:'I only',
        b:'II only',
        c:'Both I and II',
        d:'Neither I nor II',
        correct:'b',

    },
    {
        question:'A cluster index is defined on the filed which are of type',
        a:'non-key and ordering',
        b:'non-key and non-ordering',
        c:'key and ordering',
        d:'key and non-ordering',
        correct:'a',
    },
    {
        question:'Which of the following command is used to delete a table in SQL',
        a:'Delete',
        b:'truencate',
        c:'remove',
        d:'drop',
        correct:'d',
    },
    {
        question:'In the index allocation scheme of the blocks to a file the maximum possible aize of the file depends on',
        a:'the size of the block,and the size of the address of the block',
        b:'the number of the blocks used for the index,and the size of the blocks',
        c:'the size of the blocks,the number of blocks used for the index ,and the size of the address of the blocks',
        d:'none of these',
        correct:'b',
    },
    {
        question:'SELECT operation in SQL is equivalent to',
        a:'the selection operation in relational algebra',
        b:'the selction operation in relational alebra,except that select in sqwl retains duplicates',
        c:'the projection operation in relational algebra',
        d:'the projection operation in relational algebra,except that select in SQL reatins duplicates',
        correct:'d',
    },
    {
        question:'Which of the following is correct',
        a:'B-Tree are for storing data on disk and B+ tres are forr main meomry',
        b:'Range queries are faster on B+ trees',
        c:'B-trrs are for primary indexes and B+ trres are for secondry indexes',
        d:'The height of a B+ tree is independent of the number of records',
        coorect:'b',
    },
    {
        question:'Which RAID level gives block level striping with double distributive parity',
        a:'RAID 10',
        b:'RAID 2',
        c:'RAID 6',
        d:'RAID 5',
        correct:'c',
    },
    {
      question:'In functional dependency Armstrong inference rules refers to',
      a:'Reflexivity, Augmentation and Decomposition',
      b:'Transitivity, Augmentation and Reflexivity',
      c:'Augmentation, Transitivity, Reflexivity and Decomposition',
      d:'Reflexivity, Transitivity and Decomposition',
      correct:'b',

    },
    {
        question:'The level of aggregation of information required for operational control is',
        a:'Detailed',
        b:'Aggregate',
        c:'Qualitative',
        d:'None of the above',
        correct:'a',

    },
    {
        question:'A view of database that appears to an application program is known as',
        a:'Schema',
        b:'Subschema',
        c:'Virtual table',
        d:'	None of these',
        correct:'',
    }


    
];
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");
let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click',()=>{
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
