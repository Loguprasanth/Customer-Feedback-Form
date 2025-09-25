<body class="bg-gray-50 min-h-screen">

<div id="feedback-form-container" class="max-w-4xl mx-auto p-4 lg:p-8">
    <!-- Header -->
    <header id="form-header" class="text-center mb-8">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Customer Feedback Form</h1>
        <p class="text-gray-600">Help us improve your shopping experience</p>
    </header>

    <!-- Stepper -->
    <div id="stepper-container" class="mb-8">
        <div class="flex items-center justify-center space-x-4 lg:space-x-8">
            <div class="flex items-center">
                <div id="step-1" class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium step-active">1</div>
                <span class="ml-2 text-sm font-medium text-gray-700 hidden lg:block">Customer Info</span>
            </div>
            <div class="w-8 lg:w-16 h-0.5 bg-gray-300"></div>
            <div class="flex items-center">
                <div id="step-2" class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium step-inactive">2</div>
                <span class="ml-2 text-sm font-medium text-gray-700 hidden lg:block">Feedback</span>
            </div>
            <div class="w-8 lg:w-16 h-0.5 bg-gray-300"></div>
            <div class="flex items-center">
                <div id="step-3" class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium step-inactive">3</div>
                <span class="ml-2 text-sm font-medium text-gray-700 hidden lg:block">Ratings</span>
            </div>
            <div class="w-8 lg:w-16 h-0.5 bg-gray-300"></div>
            <div class="flex items-center">
                <div id="step-4" class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium step-inactive">4</div>
                <span class="ml-2 text-sm font-medium text-gray-700 hidden lg:block">Signature</span>
            </div>
        </div>
    </div>

    <!-- Form Content -->
    <div id="form-content" class="bg-white rounded-lg shadow-lg p-6 lg:p-8">
        
        <!-- Step 1: Customer Information -->
        <div id="step-1-content" class="step-content">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Customer Information</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="lg:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input id="fullName" type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Enter your full name">
                    <p id="fullName-error" class="text-red-500 text-sm mt-1">Full name is required</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input id="email" type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Enter your email">
                    <p id="email-error" class="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input id="phone" type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Enter 10-digit phone number">
                    <p id="phone-error" class="text-red-500 text-sm mt-1">Please enter a valid 10-digit phone number</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Date of Purchase</label>
                    <input id="purchaseDate" type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100" readonly="">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Products Purchased *</label>
                    <select id="products" multiple="" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                        <option value="shirts">Shirts</option>
                        <option value="pants">Pants</option>
                        <option value="dresses">Dresses</option>
                        <option value="jackets">Jackets</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <p class="text-gray-500 text-sm mt-1">Hold Ctrl/Cmd to select multiple items</p>
                    <p id="products-error" class="text-red-500 text-sm mt-1">Please select at least one product</p>
                </div>
            </div>
        </div>

        <!-- Step 2: Purchase Feedback -->
        <div id="step-2-content" class="step-content hidden">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Purchase Feedback</h2>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Your Feedback *</label>
                <textarea id="feedback" rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Please share your experience with our products and service..."></textarea>
                <p id="feedback-error" class="text-red-500 text-sm mt-1 hidden">Feedback is required</p>
            </div>
        </div>

        <!-- Step 3: Ratings -->
        <div id="step-3-content" class="step-content hidden">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Rate Your Experience</h2>
            <div class="space-y-8">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">Quality of Product *</label>
                    <div class="flex space-x-2">
                        <i class="rating-star text-2xl text-gray-300" data-rating="quality" data-value="1" data-fa-i2svg=""><svg class="svg-inline--fa fa-star active" data-rating="quality" data-value="1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-2xl text-gray-300" data-rating="quality" data-value="2" data-fa-i2svg=""><svg class="svg-inline--fa fa-star active" data-rating="quality" data-value="2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="quality" data-value="3" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="quality" data-value="3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="quality" data-value="4" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="quality" data-value="4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="quality" data-value="5" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="quality" data-value="5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                    </div>
                    <p id="quality-error" class="text-red-500 text-sm mt-1 hidden">Please rate the product quality</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">Staff Friendliness *</label>
                    <div class="flex space-x-2">
                        <i class="rating-star text-2xl text-gray-300" data-rating="staff" data-value="1" data-fa-i2svg=""><svg class="svg-inline--fa fa-star active" data-rating="staff" data-value="1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-2xl text-gray-300" data-rating="staff" data-value="2" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="staff" data-value="2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-2xl text-gray-300" data-rating="staff" data-value="3" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="staff" data-value="3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="staff" data-value="4" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="staff" data-value="4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="staff" data-value="5" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="staff" data-value="5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                    </div>
                    <p id="staff-error" class="text-red-500 text-sm mt-1 hidden">Please rate staff friendliness</p>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-3">Overall Experience *</label>
                    <div class="flex space-x-2">
                        <i class="rating-star text-2xl text-gray-300" data-rating="overall" data-value="1" data-fa-i2svg=""><svg class="svg-inline--fa fa-star active" data-rating="overall" data-value="1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-2xl text-gray-300" data-rating="overall" data-value="2" data-fa-i2svg=""><svg class="svg-inline--fa fa-star active" data-rating="overall" data-value="2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-2xl text-gray-300" data-rating="overall" data-value="3" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="overall" data-value="3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="overall" data-value="4" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="overall" data-value="4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                        <i class="rating-star text-gray-300 text-2xl" data-rating="overall" data-value="5" data-fa-i2svg=""><svg class="svg-inline--fa fa-star text-gray-300" data-rating="overall" data-value="5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                    </div>
                    <p id="overall-error" class="text-red-500 text-sm mt-1 hidden">Please rate your overall experience</p>
                </div>
            </div>
        </div>

        <!-- Step 4: Signature -->
        <div id="step-4-content" class="step-content hidden">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Digital Signature</h2>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-3">Please sign below</label>
                <canvas id="signatureCanvas" class="signature-canvas w-full h-48 bg-gray-50" width="600" height="200"></canvas>
                <div class="flex space-x-4 mt-4">
                    <button id="clearSignature" class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-eraser" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eraser" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"></path></svg></i>Clear
                    </button>
                    <button id="saveSignature" class="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-floppy-disk" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="floppy-disk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>Save Signature
                    </button>
                </div>
                <p id="signature-error" class="text-red-500 text-sm mt-1 hidden">Please provide your signature</p>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <div id="navigation-buttons" class="flex justify-between mt-8">
            <button id="prevBtn" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hidden">
                <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-arrow-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg></i>Previous
            </button>
            <button id="nextBtn" class="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 ml-auto">
                Next<i class="ml-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg></i>
            </button>
            <button id="submitBtn" class="w-full py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 hidden">
                <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-paper-plane" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg></i>Submit Feedback
            </button>
        </div>
    </div>

    <!-- Success Screen -->
    <div id="success-screen" class="bg-white rounded-lg shadow-lg p-8 text-center hidden">
        <div class="mb-6">
            <i class="text-6xl text-green-500" data-fa-i2svg=""><svg class="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
        <p class="text-lg text-gray-600 mb-8">Your feedback has been submitted successfully.</p>
        <button id="newFormBtn" class="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
            Submit Another Feedback
        </button>
    </div>
</div>

<script>
let currentStep = 1;
const totalSteps = 4;
let ratings = { quality: 0, staff: 0, overall: 0 };
let signatureData = null;
let isDrawing = false;

// Initialize form
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date
    document.getElementById('purchaseDate').value = new Date().toISOString().split('T')[0];
    
    // Setup signature canvas
    setupSignatureCanvas();
    
    // Setup rating stars
    setupRatingStars();
    
    // Setup navigation
    setupNavigation();
});

function setupSignatureCanvas() {
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#374151';
        
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    
    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            ctx.beginPath();
            signatureData = canvas.toDataURL();
        }
    }
    
    document.getElementById('clearSignature').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        signatureData = null;
    });
    
    document.getElementById('saveSignature').addEventListener('click', function() {
        if (signatureData) {
            alert('Signature saved successfully!');
        } else {
            alert('Please provide your signature first.');
        }
    });
}

function setupRatingStars() {
    document.querySelectorAll('.rating-star').forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            const value = parseInt(this.dataset.value);
            ratings[rating] = value;
            
            // Update star display
            const stars = document.querySelectorAll(`[data-rating="${rating}"]`);
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.remove('text-gray-300');
                    s.classList.add('active');
                } else {
                    s.classList.add('text-gray-300');
                    s.classList.remove('active');
                }
            });
        });
    });
}

function setupNavigation() {
    document.getElementById('nextBtn').addEventListener('click', nextStep);
    document.getElementById('prevBtn').addEventListener('click', prevStep);
    document.getElementById('submitBtn').addEventListener('click', submitForm);
    document.getElementById('newFormBtn').addEventListener('click', resetForm);
}

function nextStep() {
    if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStep();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStep();
    }
}

function updateStep() {
    // Hide all step contents
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Show current step content
    document.getElementById(`step-${currentStep}-content`).classList.remove('hidden');
    
    // Update stepper
    for (let i = 1; i <= totalSteps; i++) {
        const stepElement = document.getElementById(`step-${i}`);
        stepElement.className = stepElement.className.replace(/step-\w+/g, '');
        
        if (i < currentStep) {
            stepElement.classList.add('step-completed');
        } else if (i === currentStep) {
            stepElement.classList.add('step-active');
        } else {
            stepElement.classList.add('step-inactive');
        }
        stepElement.classList.add('w-10', 'h-10', 'rounded-full', 'flex', 'items-center', 'justify-center', 'text-sm', 'font-medium');
    }
    
    // Update navigation buttons
    document.getElementById('prevBtn').classList.toggle('hidden', currentStep === 1);
    document.getElementById('nextBtn').classList.toggle('hidden', currentStep === totalSteps);
    document.getElementById('submitBtn').classList.toggle('hidden', currentStep !== totalSteps);
}

function validateStep(step) {
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.text-red-500').forEach(error => {
        error.classList.add('hidden');
    });
    
    if (step === 1) {
        // Validate customer information
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const products = document.getElementById('products').selectedOptions;
        
        if (!fullName) {
            document.getElementById('fullName-error').classList.remove('hidden');
            isValid = false;
        }
        
        if (!email || !email.includes('@')) {
            document.getElementById('email-error').classList.remove('hidden');
            isValid = false;
        }
        
        if (!phone || phone.length !== 10 || !/^\d+$/.test(phone)) {
            document.getElementById('phone-error').classList.remove('hidden');
            isValid = false;
        }
        
        if (products.length === 0) {
            document.getElementById('products-error').classList.remove('hidden');
            isValid = false;
        }
    } else if (step === 2) {
        // Validate feedback
        const feedback = document.getElementById('feedback').value.trim();
        if (!feedback) {
            document.getElementById('feedback-error').classList.remove('hidden');
            isValid = false;
        }
    } else if (step === 3) {
        // Validate ratings
        if (ratings.quality === 0) {
            document.getElementById('quality-error').classList.remove('hidden');
            isValid = false;
        }
        if (ratings.staff === 0) {
            document.getElementById('staff-error').classList.remove('hidden');
            isValid = false;
        }
        if (ratings.overall === 0) {
            document.getElementById('overall-error').classList.remove('hidden');
            isValid = false;
        }
    } else if (step === 4) {
        // Validate signature
        if (!signatureData) {
            document.getElementById('signature-error').classList.remove('hidden');
            isValid = false;
        }
    }
    
    return isValid;
}

function submitForm() {
    if (validateStep(4)) {
        // Show success screen
        document.getElementById('form-content').classList.add('hidden');
        document.getElementById('stepper-container').classList.add('hidden');
        document.getElementById('success-screen').classList.remove('hidden');
    }
}

function resetForm() {
    // Reset form
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('products').selectedIndex = -1;
    document.getElementById('feedback').value = '';
    
    // Reset ratings
    ratings = { quality: 0, staff: 0, overall: 0 };
    document.querySelectorAll('.rating-star').forEach(star => {
        star.classList.add('text-gray-300');
        star.classList.remove('active');
    });
    
    // Clear signature
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    signatureData = null;
    
    // Reset step
    currentStep = 1;
    updateStep();
    
    // Show form again
    document.getElementById('success-screen').classList.add('hidden');
    document.getElementById('stepper-container').classList.remove('hidden');
    document.getElementById('form-content').classList.remove('hidden');
    
    // Set today's date again
    document.getElementById('purchaseDate').value = new Date().toISOString().split('T')[0];
}
</script>


</body>