import {createBrowserRouter} from 'react-router-dom'

import Home from '@/pages/Home'

const router = createBrowserRouter([
	// routing rules
	{
		path: '/',
		element: <Home />
	}
])

export default router