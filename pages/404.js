import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'

function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.notFound}>Error 404 (Page Not Found)</div>
    </Layout>
  )
}

export default NotFoundPage