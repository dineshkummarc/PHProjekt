<?php
/**
 * Unit test
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
 * @subpackage Phprojekt
 * @copyright  Copyright (c) 2010 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL v3 (See LICENSE file)
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 * @author     Eduardo Polidor <polidor@mayflower.de>
 */


/**
 * Tests for Default Search class
 *
 * @category   PHProjekt
 * @package    UnitTests
 * @subpackage Phprojekt
 * @copyright  Copyright (c) 2010 Mayflower GmbH (http://www.mayflower.de)
 * @license    LGPL v3 (See LICENSE file)
 * @link       http://www.phprojekt.com
 * @since      File available since Release 6.0
 * @author     Eduardo Polidor <polidor@mayflower.de>
 * @group      phprojekt
 * @group      search
 * @group      phprojekt-search
 */
class Phprojekt_SearchTest extends DatabaseTest
{
    public function setUp()
    {
        parent::setUp();
        $this->sharedFixture = Phprojekt::getInstance()->getDb();
    }

    protected function getDataSet()
    {
        return $this->createFlatXMLDataSet(dirname(__FILE__) . '/data.xml');
    }

    /**
     * Test index
     */
    public function testIndex()
    {
        $project = new Project_Models_Project(array('db' => $this->sharedFixture));
        $project->title = 'CC�C DD�D TT�T';
        $project->path = '/1/';
        $project->ownerId = 1;
        $project->projectId = 1;
        $project->save();
        $project->saveRights(array(1 => 255, 2 => 255));

        $search = new Phprojekt_Search();
        $result = $search->search('CC�C');
        $this->assertEquals(1, count($result));

        $result = $search->search('CC�C DD�D');
        $this->assertEquals(1, count($result));
    }

    /**
     * Test search
     */
    public function testSearch()
    {
        $search = new Phprojekt_Search();
        $result = (array)$search->search('Karlsruhe');
        $this->assertEquals(1, count($result));

        $result = (array)$search->search('NOTINDATABASE');
        $this->assertEquals(0, count($result));
    }

    /**
     * Test search
     */
    public function testSearchShortString()
    {
        $search = new Phprojekt_Search();
        $result = (array)$search->search('CCC');
        $this->assertEquals(0, count($result));

        $search = new Phprojekt_Search();
        $result = (array)$search->search('C�');
        $this->assertEquals(0, count($result));
    }

    /**
     * Test delete
     */
    public function testDelete()
    {
        $project = new Project_Models_Project();
        $project->find(1);
        $project->delete();

        $search = new Phprojekt_Search();
        $result = (array)$search->search('Karlsruhe');
        $this->assertEquals(0, count($result));
    }
}
