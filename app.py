from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

# Step 1: Initialize FastAPI
app = FastAPI()

# Step 2: Load the model and tokenizer (Load AnishaShende/tinyllama-unsloth-merged_1)
model_name = "AnishaShende/tinyllama-unsloth-merged_1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Step 3: Define a route for generating chatbot responses
@app.post("/chat")
async def get_response(request: Request):
    # Parse the incoming request body
    data = await request.json()
    user_input = data.get("input_text")
    
    if not user_input:
        return {"error": "No input_text provided"}

    # Step 4: Tokenize the input question
    input_question = f"<s>[INST] {user_input} [/INST]"
    input_ids = tokenizer(input_question, return_tensors="pt").input_ids

    # Step 5: Generate output from the model
    with torch.no_grad():
        output_ids = model.generate(input_ids, max_length=50, num_return_sequences=1)

    # Step 6: Decode the generated output
    generated_answer = tokenizer.decode(output_ids[0], skip_special_tokens=True)

    # Step 7: Return the result as a JSON response
    return {"input": user_input, "response": generated_answer}


# Step 8: Create a root route for testing
@app.get("/")
async def root():
    return {"message": "Chatbot is running!"}

# Main function to run the app
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)