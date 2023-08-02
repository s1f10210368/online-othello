import { boardUseCase } from '$/UseCase/boardUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: boardUseCase.getBoard() }),
  post: ({ body, user }) => ({ status: 201, body: boardUseCase.clickBoard(body, user.id) }),
}));
//curl -X GET localhost:31577/api/board
//curl -X DELETE localhost:31577/api/tasks/0e4d743f-32f1-4df5-bad0-5bc15b645b7c
//curl -X POST -H "Content-Type: application/json" -d '{"id":"b1747142-99ec-4cc0-bbfe-6317a0a540f4","label":"task1","done":false,"created":1690274974587}' localhost:31577/api/tasks





curl -X POST -H "Content-Type: application/json" -d '{"x":3,"y":2}' 'http://localhost:31577/api/board' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: _ga=GA1.1.1806105569.1690273914; _gid=GA1.1.1676659265.1690273914; _gat_gtag_UA_SOMENUMBER_X=1; session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiUmFjY29vbiBNb3VudGFpbiIsInBpY3R1cmUiOiJodHRwczovL2dpdGh1Yi5jb20vczFmMTAyMTAzNjgucG5nIiwiZW1haWwiOiJyYWNjb29uLm1vdW50YWluLjExMEBleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2OTAyNzUwNzIsInVzZXJfaWQiOiJSa1N4ZlVNMHpCWkc3RWxkUFpQTDRVck5QMm5uIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyYWNjb29uLm1vdW50YWluLjExMEBleGFtcGxlLmNvbSJdLCJnaXRodWIuY29tIjpbIjI5NzUxNzM1MDE2Njg2MDEyNjA2NzIxOTI1NzM1NzY2OTU1MzM1NTMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY5MDI5MDY2MywiZXhwIjoxNjkwNzIyNjYzLCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiUmtTeGZVTTB6QlpHN0VsZFBaUEw0VXJOUDJubiJ9.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed

  
  curl -X POST -H "Content-Type: application/json" -d '{"x":3,"y":2}' 'http://localhost:31577/api/board' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: ja,en-US;q=0.9,en;q=0.8' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Cookie: _ga=GA1.1.1806105569.1690273914; _gid=GA1.1.1236251547.1690859193; _gat_gtag_UA_SOMENUMBER_X=1; session=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJuYW1lIjoiUGVhY2ggUmFjY29vbiIsInBpY3R1cmUiOiJodHRwczovL2dpdGh1Yi5jb20vczFmMTAyMTAzNjgucG5nIiwiZW1haWwiOiJwZWFjaC5yYWNjb29uLjU5N0BleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdXRoX3RpbWUiOjE2OTA4NjEzNTksInVzZXJfaWQiOiJYbk5LWXNrczVCMmRFOVRaMFVpdExJRThscUxVIiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJwZWFjaC5yYWNjb29uLjU5N0BleGFtcGxlLmNvbSJdLCJnaXRodWIuY29tIjpbIjU4MDA0OTAyNjkwMTMzMTY3Mzc1NDE3MDUzMTM1ODc3ODY5NDMzNTAiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnaXRodWIuY29tIn0sImlhdCI6MTY5MDg2MTM4NCwiZXhwIjoxNjkxMjkzMzg0LCJhdWQiOiJlbXVsYXRvciIsImlzcyI6Imh0dHBzOi8vc2Vzc2lvbi5maXJlYmFzZS5nb29nbGUuY29tL2VtdWxhdG9yIiwic3ViIjoiWG5OS1lza3M1QjJkRTlUWjBVaXRMSUU4bHFMVSJ9.' \
  -H 'Origin: http://localhost:3000' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --compressed