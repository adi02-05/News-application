// src/components/NewsTable.js
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const NewsTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        const articles = response.data.articles.map((article, index) => ({
          key: index,
          title: article.title,
          summary: article.description,
          link: article.url
        }));
        setData(articles);
      } catch (error) {
        console.error("Error fetching the news articles: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a href={record.link} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
  ];

  return <Table columns={columns} dataSource={data} loading={loading} />;
};

export default NewsTable;
