// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// interface Message {
//   role: string;
//   content: string;
// }


// const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});

// export async function POST(req: Request, res: NextResponse) {
//     const body = await req.json();
//     const messages=body.messages.map((message:Message)=>({
//       role:message.role,content:message.content,
//     }));

//     const requestData = { messages: messages, }; 
  
//     try{
//       const completion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         ...requestData,
//         max_tokens:100,
//       });
//       console.log(completion.choices[0].message);
//       const theResponse = completion.choices[0].message;
    
//     return NextResponse.json({ output: theResponse }, { status: 200 })
//     }catch (error) { console.error(error); return NextResponse.json({ error: "An error occurred" }, { status: 500 }); } 
// };
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({apiKey:process.env.OPENAI_API_KEY});
export async function POST(req: Request, res: NextResponse) {
  const body = await req.json()

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: body.messages,
  });
  console.log(completion.choices[0].message);
  const theResponse = completion.choices[0].message;

  return NextResponse.json({ output: theResponse }, { status: 200 })

};
