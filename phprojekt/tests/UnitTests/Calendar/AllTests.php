<?php
/**
 * Test suite for the Calendar module
 *
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License version 3 as published by the Free Software Foundation
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * @category   PHProjekt
 * @package    UnitTests
 * @subpackage Calendar
 * @copyright  Copyright (c) 2010 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL v3 (See LICENSE file)
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 * @version    Release: @package_version@
 * @author     Eduardo Polidor <polidor@mayflower.de>
 */

if (!defined('PHPUnit_MAIN_METHOD')) {
    define('PHPUnit_MAIN_METHOD', 'Default_AllTests::main');
}

require_once 'PHPUnit/TextUI/TestRunner.php';

require_once 'Controllers/IndexControllerTest.php';
require_once 'Models/CalendarTest.php';

/**
 * Test suite for the default module
 *
 * @category   PHProjekt
 * @package    UnitTests
 * @subpackage Calendar
 * @copyright  Copyright (c) 2010 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL v3 (See LICENSE file)
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 * @version    Release: @package_version@
 * @author     Eduardo Polidor <polidor@mayflower.de>
 */
class Calendar_AllTests
{
    /**
     * Runs the test suite
     *
     */
    public static function main()
    {
        PHPUnit_TextUI_TestRunner::run(self::suite());
    }

    /**
     * Builds the test suite containing all
     * tests of this module and returns the suite
     *
     * @return PHPUnit_Framework_TestSuite
     */
    public static function suite()
    {
        $suite = new PHPUnit_Framework_TestSuite('Calendar Controller');

        $suite->addTestSuite('Calendar_IndexController_Test');
        $suite->addTestSuite('Calendar_Models_Calendar_Test');

        return $suite;
    }
}

if (PHPUnit_MAIN_METHOD == 'Calendar_AllTests::main') {
    Framework_AllTests::main();
}
