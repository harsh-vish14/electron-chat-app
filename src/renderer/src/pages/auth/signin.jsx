import React, { useEffect, useState } from 'react'
import { useFilePicker } from 'use-file-picker'
import pushNotification from '../../helper/notification'

function SIGNIN() {
  const [signInUI, setSignInUI] = useState(false)

  // images
  const [avatarUrl, setAvatarUrl] = useState(
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1387&q=80'
  )
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: ['.png', '.jpg', '.jpeg'],
    readAs: 'DataURL'
  })

  // inputs
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const buttonClick = () => {
    console.log('but clicked')
    pushNotification('test title', 'test message')
  }

  useEffect(() => {
    const imgUrl =
      filesContent[0]?.content ||
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1387&q=80'
    setAvatarUrl(imgUrl)
  }, [filesContent])

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16" style={{ filter: 'drop-shadow(0px 0px 4px #8F43EE)' }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1720 1720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M764.338 0C766.94 9.82744 771.812 19.6534 771.819 29.4825C772.188 544.013 772.139 1058.54 772.155 1573.08C772.156 1610.54 772.314 1648 772.534 1689.61C773.063 1697.62 773.457 1701.5 773.851 1705.38C771.515 1709.51 769.18 1713.63 763.214 1718.02C521.801 1718.26 284.018 1718.2 46.2353 1718.23C34.0851 1718.24 21.9351 1718.98 9.78491 1719.38C7.03299 1714.67 1.91341 1709.98 1.88272 1705.26C1.38307 1628.77 1.52916 1552.28 1.52916 1473.14C172.47 1473.14 341.885 1473.14 513.084 1473.14C513.084 1390.33 513.084 1310.18 513.084 1227.63C502.721 1227.63 493.395 1227.63 484.07 1227.63C333.294 1227.63 182.517 1227.72 31.7416 1227.44C21.7444 1227.43 11.7527 1224.65 1.40369 1220.28C0.699607 1216.58 0.349884 1215.75 0 1214.92C0.504286 1204.98 1.44781 1195.03 1.44972 1185.09C1.52453 800.206 1.47625 415.322 1.73024 30.4379C1.73647 21.0364 4.97445 11.6367 10.6653 1.75328C259.365 1.33312 504.104 1.40518 748.843 1.39816C754.008 1.39801 759.173 0.48641 764.338 0ZM514.815 682.117C514.815 537.555 514.815 392.994 514.815 248.399C427.528 248.399 344.193 248.399 260.716 248.399C260.716 493.557 260.716 737.111 260.716 980.625C346.178 980.625 429.466 980.625 514.815 980.625C514.815 881.768 514.815 784.444 514.815 682.117Z"
              fill="#8F43EE"
            />
            <path
              d="M1694.62 0C1702.38 3.05623 1710.15 6.11267 1718.29 14.2579C1718.61 62.4946 1718.82 105.647 1718.42 148.789C1717.81 215.11 1716.79 281.423 1715.94 347.74L1714.16 346.14C1714.16 346.14 1712.03 346.619 1708.82 346.398C1539.46 346.177 1373.31 346.177 1205.52 346.177C1205.52 357.601 1205.52 364.396 1205.52 371.19C1205.53 690.617 1205.52 1010.04 1205.59 1329.47C1205.59 1336.4 1206.46 1343.32 1206.93 1350.25C1206.47 1353.25 1206 1356.24 1206.6 1364.71C1252.66 1371.32 1297.66 1373.45 1342.66 1373.43C1461.72 1373.38 1580.78 1372.4 1699.84 1371.79C1702.16 1372.4 1704.49 1373.02 1709.74 1373.61C1713.62 1373.49 1714.56 1373.39 1715.5 1373.3C1716.5 1378.26 1717.51 1383.22 1718.52 1393.09C1718.51 1441.14 1718.82 1484.29 1718.41 1527.42C1717.8 1591.38 1716.69 1655.34 1715.8 1719.3C1707.91 1718.7 1700.02 1718.1 1688.38 1717.84C1454.89 1718.08 1225.15 1717.97 995.402 1717.97C989.358 1717.97 983.315 1719.11 977.271 1719.72C974.994 1719.04 972.716 1718.36 967.045 1717.84C961.26 1718.66 958.87 1719.33 956.479 1720C953.613 1716.71 950.746 1713.42 947.775 1705.31C947.745 1143.76 947.822 587.031 947.833 30.3058C947.833 24.5568 946.95 18.8081 946.479 13.0589C949.031 9.47965 951.583 5.90016 956.649 1.9606C960.074 1.13322 960.985 0.665921 961.897 0.198409C979.454 0.862833 997.011 1.52747 1019.26 2.06803C1241.48 2.033 1459.02 2.13979 1676.55 2.11779C1682.58 2.11715 1688.6 0.737046 1694.62 0Z"
              fill="#8F43EE"
            />
            <path
              d="M1720 1021.12C1714.97 1024.63 1709.96 1031.17 1704.92 1031.21C1624.9 1031.85 1544.87 1031.66 1462.89 1031.66C1462.89 917.261 1462.89 804.971 1462.89 687.077C1545.6 687.077 1628.77 687.077 1714.85 689.684C1718.02 703.807 1718.46 715.321 1718.52 726.839C1719.05 824.933 1719.52 923.027 1720 1021.12Z"
              fill="#8F43EE"
            />
          </svg>
        </div>
        <div className="my-4 text-5xl font-bold">welcome</div>
        <div className="relative">
          <div className="h-20 w-20 my-3 rounded-md overflow-hidden ">
            <img src={avatarUrl} height="100%" width="100%" className="block object-contain" />
          </div>
          <div>
            <div
              onClick={() => openFileSelector()}
              className="absolute z-10 top-0 left-0 h-full w-full flex justify-center items-center bg-primary-bg opacity-0 cursor-pointer hover:opacity-60 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                viewBox="0 0 512 512"
                className="fill-primary-white"
              >
                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
              </svg>{' '}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Name</label>
          <input
            value={inputs.name}
            type="text"
            className="bg-input-bg p-2 w-72 rounded-md outline-none"
            onChange={(val) => {
              setInputs({ ...inputs, name: val.target.value })
            }}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label>Email</label>
          <input
            value={inputs.email}
            type="email"
            className="bg-input-bg p-2 w-72 rounded-md outline-none"
            onChange={(val) => {
              setInputs({ ...inputs, email: val.target.value })
            }}
          />
        </div>
        {signInUI && (
          <>
            <div className="flex flex-col mt-5">
              <label>Password</label>
              <input
                value={inputs.password}
                type="email"
                className="bg-input-bg p-2 w-72 rounded-md outline-none"
                onChange={(val) => {
                  setInputs({ ...inputs, email: val.target.value })
                }}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label>confirm Password</label>
              <input
                value={inputs.confirmPassword}
                type="email"
                className="bg-input-bg p-2 w-72 rounded-md outline-none"
                onChange={(val) => {
                  setInputs({ ...inputs, email: val.target.value })
                }}
              />
            </div>
          </>
        )}
        <div
          onClick={() => {
            buttonClick()
          }}
          className="submit-btn mt-10 bg-primary-pink w-64 p-2 text-center rounded-md text-base cursor-pointer scale-100 hover:scale-105 transition-all"
        >
          Submit
        </div>
        <div className="mt-3">
          {signInUI ? 'Already Have Account' : 'New Here'}?{' '}
          <span
            className="text-primary-pink cursor-pointer hover:underline"
            onClick={() => {
              setSignInUI(!signInUI)
            }}
          >
            {signInUI ? 'Login' : 'Register'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default SIGNIN
