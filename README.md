# AttainUBEAssignment
AttainUAssignMent

Install all dependencies with “npm install”
Start the server with “npm start.


Find all the required API(curl's) below here. 

1. Login API
curl -X POST \
  http://localhost:8585/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: bd26296b-debf-418e-4e92-0a3fb6913b31' \
  -d '{
	"username":"Raj",
	"password":"raj"
}'

2. Patch API

curl -X POST \
  http://localhost:8585/getuser \
  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTEyMDg3Mjl9.ZWxS3FXQM7FelgiU_EDWAMQjy7-EKMNc9sZC8o3Rq_U' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 8ebe3284-9dfb-971d-8f8b-887fa47b8752' \
  -d '{
    "user":"Raj",
    "Location":"Hyderabad"
}'

3. Thumbnail request API

curl -X GET \
  http://localhost:8585/getimgthumb \
  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTEyMDg3Mjl9.ZWxS3FXQM7FelgiU_EDWAMQjy7-EKMNc9sZC8o3Rq_U' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 6aa187b8-98d7-c326-274b-f0e1f5bfcf0b'

4. Add user address API

curl -X POST \
  http://localhost:8585/adduseraddress \
  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTEyMDg3Mjl9.ZWxS3FXQM7FelgiU_EDWAMQjy7-EKMNc9sZC8o3Rq_U' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: cb7c5f00-c161-6b2f-8639-04c0ce8c6a6f' \
  -d '{
	"fullname":"Rajashekar avuti",
	"address":"Chenreddypalli",
	"country":"India",
	"state":"Telangana",
	"city":"Hyderabad",
	"pincode":509407
}'