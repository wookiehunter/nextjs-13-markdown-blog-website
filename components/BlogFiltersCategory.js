import React from 'react';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BlogFilters() {
    const filters = ['Technology', 'Business', 'Freelancing', 'Personal'];

    return (
        <Row>
            {filters.map((filter, index) => (
                <Col md={6} lg={3} key={index}>
                    <Link href={`./categories?category=${filter}`}>
                        <div className={`filterTag_${filter}`}>{filter}</div>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}

export default BlogFilters;