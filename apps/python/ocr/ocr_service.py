import os
import openai
import json
from dotenv import load_dotenv

# load_dotenv()

class OCRService:
    def __init__(self):
        self.client = openai.AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    async def extract_text(self, photo_url: str, type: str = 'food') -> dict:
        """
        Обрабатывает изображение с упаковкой продукта и возвращает JSON с названием, составом и пищевой ценностью.
        """
        try:
            response = await self.client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": (
                           "You are an OCR assistant specialized in extracting information from images of food product packaging. The text on the image is in Russian.\n\n"
                            "Your task is to analyze the provided image and extract the following information:\n"
                            "1. The product name.\n"
                            "2. The product composition, which includes all text following the word 'Состав' until the end of the relevant section (e.g., until the start of nutritional information or the end of the text). Ensure the composition is extracted in full, ignoring periods or other punctuation within the text, and exclude any unrelated data (e.g., nutritional information or other sections). Separate the ingredients in the composition with commas.\n"
                            "3. The energy value, including:\n"
                            "   - The weight or volume unit (typically '100г' for solids or '100мл' for liquids) as specified on the packaging.\n"
                            "   - The number of calories (kcal) per the specified unit.\n"
                            "   - The amount of protein per the specified unit.\n"
                            "   - The amount of fat per the specified unit.\n"
                            "   - The amount of carbohydrates per the specified unit.\n\n"
                            "If any information is missing from the image, use 'null' for that field.\n\n"
                            "Format the extracted information into the following JSON structure:\n"
                            "{\n"
                            "    \"name\": \"<product name>\",\n"
                            "    \"composition\": \"<composition text>\",\n"
                            "    \"energy_value\": {\n"
                            "        \"weight\": \"<weight or volume unit>\",\n"
                            "        \"kcal\": <number or null>,\n"
                            "        \"protein\": <number or null>,\n"
                            "        \"fat\": <number or null>,\n"
                            "        \"carbohydrates\": <number or null>\n"
                            "    }\n"
                            "}\n\n"
                            "Replace <product name>, <composition text>, and <weight or volume unit> with the actual text extracted from the image. For numerical values, use numbers if available, otherwise use null.\n"
                            "If triple quotes (''') appear in the text, escape them as \"\"\" in the JSON output. Ensure the response contains only a valid JSON object, without any additional text, explanations, or formatting. Do not wrap the JSON in code blocks or add any Markdown formatting."
                        )
                    },
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": "Please analyze the product packaging in the image and return the extracted information in JSON format:"
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": photo_url,
                                    "detail": "auto"
                                }
                            }
                        ]
                    }
                ],
                max_tokens=500
            )

            content = response.choices[0].message.content.strip()
            print(content)

            if not content.startswith("{"):
                raise ValueError("Ответ не в формате JSON:\n" + content)

            return json.loads(content)

        except Exception as e:
            raise Exception(f"Ошибка при распознавании изображения: {str(e)}")
