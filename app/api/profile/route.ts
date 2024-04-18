

export async function POST(request: Request) {
    try {
      const text = await request.text()
      
    } catch (error: any) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      })
    }
   
    return new Response('Success!', {
      status: 200,
    })
  }