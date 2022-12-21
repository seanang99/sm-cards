import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Cards from "../../Cards";

import { MOCK_MEMORY_VERSE_PACK, MOCK_VERSES } from '../../../mocks/MockVerses';

const HomePage = () => {
    return (
        <div className='page-layout'>
            <header>
                <Navbar bg='light' expand='lg'>
                    <Container>
                        <Navbar.Brand href='/'>SM</Navbar.Brand>
                        <div className='nav-bar__right'>
                            <Form>
                                <Form.Check type='switch' id='test-mode-switch' label='Test Mode' />
                                <Form.Select className='nav-bar__select' aria-label='Select Memory Verse Pack'>
                                    <option>Select Pack</option>
                                    {MOCK_MEMORY_VERSE_PACK.map((pack) => {
                                        return (
                                            <option key={pack} id={pack} value={pack}>{pack}</option>
                                        );
                                    })}
                                </Form.Select>
                            </Form>
                        </div>
                    </Container>
                </Navbar>
            </header>

            <div className='page-body'>
                {/* Cards */}
                {MOCK_VERSES.map((v) => {
                    return (
                        <Cards key={`${v.id} + ${v.memory_pack}`} test={false} title={v.title} subtitle={v.reference} content={v.verse} />
                    )
                })}
            </div>
        </div>

    );
};

export default HomePage;